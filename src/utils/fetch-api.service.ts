interface FetchApiServiceConfig {
  tokenRefreshUrl: string;
  onTokenRefreshErrorCb: () => void;
}

class FetchApiService {
  private static instance: FetchApiService;
  private isRefreshing = false;
  private failedRequests: Array<(value?: unknown) => void> = [];
  private config: FetchApiServiceConfig;

  private constructor(config: FetchApiServiceConfig) {
    this.config = config;
  }

  static getInstance(config?: FetchApiServiceConfig): FetchApiService {
    if (!FetchApiService.instance) {
      if (!config) {
        throw new Error(
          'FetchApiService must be initialized with config first',
        );
      }
      FetchApiService.instance = new FetchApiService(config);
    }
    return FetchApiService.instance;
  }

  static init(config: FetchApiServiceConfig): FetchApiService {
    FetchApiService.instance = new FetchApiService(config);
    return FetchApiService.instance;
  }

  private async handleTokenRefresh() {
    try {
      if (this.isRefreshing) {
        return new Promise((resolve) => {
          this.failedRequests.push(resolve);
        });
      }

      this.isRefreshing = true;

      const response = await fetch(this.config.tokenRefreshUrl, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      this.failedRequests.forEach((resolve) => resolve());
      this.failedRequests = [];

      return response;
    } finally {
      this.isRefreshing = false;
    }
  }

  async fetch(url: string, options: RequestInit = {}) {
    try {
      const response = await fetch(url, {
        ...options,
        credentials: 'include',
      });

      if (response.status === 401) {
        await this.handleTokenRefresh();
        return fetch(url, {
          ...options,
          credentials: 'include',
        });
      }

      return response;
    } catch (error) {
      if (error instanceof Error && error.message === 'Token refresh failed') {
        this.config.onTokenRefreshErrorCb();
        // window.location.href = this.config.loginUrl;
      }
      throw error;
    }
  }
}

export { FetchApiService };

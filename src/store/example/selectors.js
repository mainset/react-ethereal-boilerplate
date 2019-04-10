export const selectExampleStore = (state) => state.localExample;

// Need to use .get, beucase reducer defaulState was created by using ImmutableJS
export const selectWelcomeData = (state) => selectExampleStore(state).get('data');

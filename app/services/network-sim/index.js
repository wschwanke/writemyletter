/**
 * A function that just generates a random number between 200 and 1500 to simulate async behaviour.
 */
const networkSim = () => (
  (Math.random() * (1000 - 200)) + 200
);

export default networkSim;

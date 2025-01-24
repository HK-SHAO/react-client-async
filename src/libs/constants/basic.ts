export const emptyObject = Object.freeze({});
export type EmptyObject = typeof emptyObject;

export const AsyncFunction = (async () => {}).constructor;
export const GeneratorFunction = function* () {}.constructor;
export const AsyncGeneratorFunction = async function* () {}.constructor;

const getStore = async() => {
    const kv = await Deno.openKv();
  const count = await kv.get(["store"]);
  return count?.value ?? "Nothing.";
};

const setStore = async (s) => {
    const kv = await Deno.openKv(); 
    await kv.set(["store"], s);
};

export { getStore, setStore };

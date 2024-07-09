import fsPromise from "fs/promises";

const FetchDataFromJson = async () => {
  try {
    const jsondata = await fsPromise.readFile("./Assets/Data.json", "utf-8");
    return jsondata;
  } catch (error) {
    console.log("Error whil fwtching data : ", error);
  }
};

export { FetchDataFromJson };

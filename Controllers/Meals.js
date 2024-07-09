import { FetchDataFromJson } from "../Utils/FetchData.js";

const GetMeals = async (req, res) => {
    try {
        const jsondata = await FetchDataFromJson();
        if (!jsondata) {
            throw new Error('No data received from FetchDataFromJson');
        }

        const objdata = JSON.parse(jsondata);
        const GetAllMeals = objdata.meals;

        res.status(200).send({
            message: 'Success Getting All Meals',
            Meals: GetAllMeals
        });
    } catch (error) {
        console.error('Error:', error.message);  // Log the error
        res.status(500).send({
            message: 'Error Getting Meals',
            error: error.message
        });
    }
};

export { GetMeals };

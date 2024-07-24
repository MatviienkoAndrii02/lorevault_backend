class Controller {
    get = async (request: any, response: any) => {
        return response.send("Hello World");
    };
}

export default Controller
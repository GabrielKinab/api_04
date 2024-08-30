// criar uma função para parametrizar os responses
function response(status,message,data=null)
{
    return{
        status,
        message,
        data,
        timestamp:new Date().getTime
    }
}
mudule.exports = {
    response
}
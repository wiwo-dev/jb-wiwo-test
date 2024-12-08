export const dynamic = 'force-dynamic';

const Page = async () => {
    const requestOptions = {
        method: 'GET',
    };

    let result = '';
    try {
        const response = await fetch(
            'https://propelyourbusiness-api.local.box/api/exit/assessment/V8glUEuB6rTjzzDD/resume?uuid=924cfc92-4731-49cd-b329-695a77878ead&signature=188a5951968369fd733bdaa1d9833b696c5f68f16b954cd89ac533987de38c0d',
            requestOptions
        );
        result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    // const requestOptions = {
    //     method: 'GET',
    // };

    // let result = '';
    // try {
    //     const response = await fetch('http://example.test/jobs', requestOptions);
    //     result = await response.text();
    //     console.log(result);
    // } catch (error) {
    //     console.error(error);
    // }
    return (
        <div>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    );
};
export default Page;

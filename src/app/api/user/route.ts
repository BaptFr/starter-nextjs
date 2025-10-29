export async function GET() {
    const user = {
        id: 777,
        name: 'JohnnyCash',
        email:'johhnycash@gmail.com'
    }
    return new Response(JSON.stringify(user), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
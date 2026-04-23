export const sendDirection = async (heading: number) => {
    try {
        await fetch('http://192.168.1.5/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                direction: heading,
            }),
        });
    } catch (error) {
        console.log('API error:', error);
    }
};

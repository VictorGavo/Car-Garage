let token = `2cf0c24ebe04badb090afe6a25ba2aa600d29ebbb3f9b9bb`

export const server_calls = {

    get: async () => {
        const response = await fetch(`https://bottlenose-wakeful-ermine.glitch.me/api/garage`, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://bottlenose-wakeful-ermine.glitch.me/api/garage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://bottlenose-wakeful-ermine.glitch.me/api/garage/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`https://bottlenose-wakeful-ermine.glitch.me/api/garage/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }

}
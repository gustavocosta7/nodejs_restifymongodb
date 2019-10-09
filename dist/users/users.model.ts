const users = [
    {id: '1', name: 'Teste 1', email: 'teste@gmail.com'}
];

export class User {
    static findAll(): Promise<any> {
        return Promise.resolve(users);
    }

    static findById(id: string): Promise<any>{
        return new Promise(resolve => {
            const filtered = users.filter(users=> user.id === id)
            let user = undefined;
            if(filtered.length > 0){
                user = filtered[0]
            }
            resolve(user)
        })
    }
}
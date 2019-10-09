export const environment = {
    server: {
        port: process.env.SERVER_PORT || 3000
    },
    db: {
        url: process.env.DB_URL || 'mongodb+srv://user_admin:adminpasswd@clusterteste-9y6hc.mongodb.net/innovations?retryWrites=true&w=majority'
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    server: {
        port: process.env.PORT || 3000
    },
    db: {
        url: process.env.DB_URL || 'mongodb://localhost:27017/dbInovacao'
        // url: process.env.DB_URL ||  'mongodb://db-chatbot:culzzeZzfGYO8BEqnXmlt0P7OTh3WP07OkwzR5ok1XLCyXp4AJinkC6jpfqExncdUfMASbJrIrdywwfPlM1JZg==@db-chatbot.documents.azure.com:10255/inovacao_db_QAS?ssl=true'
    }
};

import { DBManager } from "@beyond-js/reactive-2/database";

(async () => {
  DBManager.config("airooms@1", {
    users: "++id, &username, &email, password_hash, createdAt, updatedAt",
    groups: "++id, &name, description, createdBy, createdAt, updatedAt",
    userGroups: "++id, &userId, &groupId, createdAt, updatedAt",
    conversations: "++id, &groupId, topic, createdAt, updatedAt",
    messages: "++id, &userId, &conversationId, content, createdAt, updatedAt",
    categories: "++id, &name, description, createdBy, createdAt, updatedAt",
    messageCategories: "++id, &messageId, &categoryId, assignedAt, createdAt, updatedAt",
    documents: "++id, &groupId, &createdBy, content, createdAt, updatedAt",
    documentMessages: "++id, &documentId, &messageId, includedAt, createdAt, updatedAt",
  });
})();

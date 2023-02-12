import { vi } from 'vitest';
import { createExistingResource, createResource } from '../../../src/resources/create-resource.js';
export class ArticleResource {
    firstName;
}
const articleStructure = {
    firstName: {
        type: 'string'
    }
};
export const alwaysValidSchema = {
    validator: {
        isFieldValid: () => vi.fn(() => true)
    },
    authorization: {
        authorizer: {
            canUpdateField: () => vi.fn(() => true),
            canDelete: () => vi.fn(() => true),
            canAccessField: () => vi.fn(() => true),
            canCreate: vi.fn(() => true)
        }
    }
};
export function createArticleResource(overrides) {
    return createResource(new ArticleResource(), {
        structure: articleStructure,
        ...overrides
    });
}
export function createExistingArticleResource(overrides) {
    return createExistingResource(new ArticleResource(), {
        structure: articleStructure,
        ...overrides
    });
}

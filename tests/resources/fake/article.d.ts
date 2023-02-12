import type { ResourceAuthorizer } from '../../../src/resources/authorizer.js';
import type { ResourceSchema } from '../../../src/resources/schema.js';
export declare class ArticleResource {
    firstName?: string;
}
export declare const alwaysValidSchema: never;
export type ArticleResourceAuthorizer = ResourceAuthorizer<ArticleResource>;
export type StructureLessArticleSchema = Omit<ResourceSchema<ArticleResource>, 'structure'>;
export declare function createArticleResource(overrides: StructureLessArticleSchema): import("../../../src/index.js").Resource<ArticleResource>;
export declare function createExistingArticleResource(overrides: StructureLessArticleSchema): import("../../../src/index.js").Resource<ArticleResource>;

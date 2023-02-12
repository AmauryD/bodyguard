# BODYGUARD

An aggressive object Proxy protecting your objects.

## What it does

Controls a resource integrity and access with a provided Schema.

## Example

See the *tests* folder for more examples.

```ts
class ArticleResource {
    firstName: string
}

class Actor {
    name: string = 'amaury'
    role: string = 'admin'
}

const alwaysValidSchema: ResourceSchema<ArticleResource>  = {
    structure: {
        firstName: {
            type: 'string'
        }
    }
    validator: {
        isFieldValid: () => true
    },
    authorization: {
        authorizer: {
            canUpdateField: () => true,
            canDelete: () => true,
            canAccessField: (resource: T, field: StringKeyOf<T>, value: unknown, actor: unknown) => {
                if (actor.role === 'admin') {
                    return true;
                }
                return false;
            },
            canCreate: () => true
        }
    }
};

const resourceWithAnonymousActor = createResource(
    new ArticleResource(),
    alwaysValidSchema
);

// throws error because canAccessField = false
console.log(resourceWithAnonymousActor.firstName);

const resourceWithAdminActor = createResource(
    new ArticleResource(),
    alwaysValidSchema,
    new Actor()
);

// does not throw
console.log(resourceWithAdminActor.firstName);
```

## Why ?

A small challenge writing a library in TDD and using Proxy.
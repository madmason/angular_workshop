# Change the HeaderService to NgRx
Recently we manage our HeaderState with Subjects.
Since we introduced NgRx we need to refactor the HeaderService as well.

1. Add a new Reducer `ng generate reducer Header`
 * Add a new HeaderState to this HeaderReducer
 * Add the headerState and the headerReducer to the index.ts
2. Add a new Action `ng generate action Header`
 * Which action types are needed?
 * The Action Create Class need a payload this time.
3. Create a new Selector for the headerState
 * Dispatch the new Action inside the `book-item.component.ts`
 * Read the new Selector-Observable inside the `HeaderComponent`

## Hints

```
export class SetHeaders implements Action {
  readonly type = HeaderActionTypes.SetHeader;

  constructor(public headerTitle: string) {}
}
```


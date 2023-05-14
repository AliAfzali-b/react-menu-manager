# react-menu-manager

## Install from the command line:

instead of 1.2.3 you should use your own version <br />
`npm install react-menu-manager`

some times you need to pass '--legacy-peer-deps'

## Install via package.json:

instead of 1.2.3 you should use your own version <br />
`"react-menu-manager": "1.2.3",`

# Use Example

```javascript
import React, {useState} from 'react';
import MenuManager from 'react-menu-manager';
```

# Props

| Prop name        | Type              | Required? |
| ---------------- | ----------------- | --------- |
| `menu_items`     | menu_item_model[] | **true**  |
| `set_menu_items` | function          | **true**  |

## menu_item_model model

```javascript
interface menu_item_model {
  id: string;
  parent_id: string | null;
  title: string;
  [key: string]: any;
}
```

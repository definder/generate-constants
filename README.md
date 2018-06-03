# generate-constants
Function for elegantly setting constants.

##Getting Started

```$xslt
npm install --save generate-constant

or

yarn add generate-constant
```

##Examples using

```$xslt
import generateConstant from 'generate-constant';

export const init = generateConstant('init');
// Main/init

export const user = generateConstant('user', ['SUCCESS', 'REQUEST', 'FAILURE'], {model: 'Profile'});
/* { 
  SUCCESS: 'Main/Profile_user_SUCCESS',
  REQUEST: 'Main/Profile_user_REQUEST',
  FAILURE: 'Main/Profile_user_FAILURE' 
} */

export const user = generateConstant('user', ['SUCCESS', 'REQUEST', 'FAILURE'], {model: 'Profile', namespace: 'Private'});
/* { 
  SUCCESS: 'Private/Profile_user_SUCCESS',
  REQUEST: 'Private/Profile_user_REQUEST',
  FAILURE: 'Private/Profile_user_FAILURE' 
} */



export const user = generateConstant('init', {model: 'Profile', namespace: 'Private'});
// Private/Profile_init
```

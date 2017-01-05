const router = require('./core/router')

/**
 * App Routes
 *
 * Routes for all app views
 */

router

// Signup page
.add('/sign-in', {
  title      : 'Sign-in',
  controller : require('./view/auth/signin'),
  template   : require('./view/auth/signin.pug'),
  loggedIn   : false
})

// Dashboard
.add('/', {
  title      : 'Dashboard',
  template   : require('./view/dashboard.pug'),
  loggedIn   : true
})

// Type entries > List
.add('/:type/list', {
  id         : 'type-list',
  title      : 'Entries > List',
  controller : require('./view/type/list'),
  template   : require('./view/type/list.pug'),
  loggedIn   : true
})
.add('/:type/list/page-:page', {
  extends    : 'type-list'
})

// Type entries > Add
.add('/:type/add', {
  id         : 'form',
  title      : 'Entries > Add',
  controller : require('./view/type/form'),
  template   : require('./view/type/form.pug'),
  loggedIn   : true
})

// Type entries > Edit
.add('/:type/edit/:id', {
  extends    : 'form',
  title      : 'Entries > Edit',
  loggedIn   : true
})

// User settings
.add('/user/settings', {
  title      : 'User settings',
  controller : require('./view/users/settings'),
  template   : require('./view/users/settings.pug'),
  loggedIn   : true
})

// Edit website statics
.add('/statics', {
  title      : 'Website statics',
  controller : require('./view/statics'),
  template   : require('./view/statics.pug'),
  loggedIn   : true
})

// 404
.add('/404', {
  title      : 'Not found',
  template   : require('./view/404.pug')
})

.otherwise('/404')
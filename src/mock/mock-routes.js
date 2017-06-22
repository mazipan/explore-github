let routes = [
  {
    method: 'POST',
    url: '/backend/common/users/_login',
    param_body: ['username', 'password'],
    response: {
      code: 200,
      status: 'OK'
    }
  },
  {
    method: 'DELETE',
    url: '/backend/common/users/_logout',
    response: {
      code: 200,
      status: 'OK'
    }
  },
  {
    method: 'POST',
    url: '/backend/common/users',
    param_body: ['username', 'password'],
    response: {
      code: 200,
      status: 'OK'
    }
  },
  {
    method: 'POST',
    url: '/backend/common/users/_verify',
    response: {
      code: 200,
      status: 'OK'
    }
  },
  {
    method: 'POST',
    url: '/backend/common/users/_forgot-password',
    param_body: ['username'],
    response: {
      code: 200,
      status: 'OK',
      message: 'Please check your email'
    }
  }
]

export default {
  routes
}


import axios from 'axios'

const userRequest = axios.create({
  baseURL: 'http://localhost:5000/api/1.0/',
  headers: { 'Content-Type': 'application/json' },
})

// 可以統一管理 API Call
const postFunc = data => userRequest.post('/echo', data)
const getFunc = url => userRequest.get(url)
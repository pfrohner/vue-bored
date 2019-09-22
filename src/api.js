import Vue from 'vue';
import axios from "axios";

const baseURL = "https://www.boredapi.com/api";
const http = axios.create({
    baseURL
});

Vue.prototype.$http = http

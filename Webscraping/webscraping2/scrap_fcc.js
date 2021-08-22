// when scraping websites that has their dom complied to javascript you use the the network tab to find the link to the users data.
// Do npm install request,cheerio,cli-table, request-promise

const rp = require('request-promise');
const cheerio = require('cheerio');
const Table = require('cli-table');

const users = [];


console.clear() // Clear terminal

// Website
url = 'http://yourwebsite.onion/'

console.log('\nConnecting to TOR\'s Network... ')

// Tor Proxy Settings
proxyIP = '127.0.0.1'
proxyPort = 9150

var tr = require('tor-request'); // tor
const performance = require('perf_hooks').performance; // ms
tr.setTorAddress(proxyIP, proxyPort);

console.log('\nConnected.')

i = 1

function ping(url) {
    var t0 = performance.now()
    tr.request(url, function (err, res, body) {
        var t1 = performance.now()
        ms = parseInt(t1 - t0)
        console.log(i+' > Reply: ['+res.statusCode+'/'+res.statusMessage+'] time='+ms+'ms')
        i = i + 1
        ping (url)
    })
}

console.log('\nStarted pinging >', url+'\n')
ping(url)

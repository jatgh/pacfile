function FindProxyForURL(url, host) {
  if (isInNet(host, "192.168.0.0", "255.255.0.0")) return "DIRECT";
  if (isInNet(host, "172.16.0.0", "255.240.0.0")) return "DIRECT";
  if (isInNet(host, "10.0.0.0", "255.0.0.0")) return "DIRECT";
  if (isInNet(host, "100.64.0.0", "255.192.0.0")) return "DIRECT";
  if (isInNet(host, "127.0.0.0", "255.255.255.0")) return "DIRECT";
  if (dnsDomainIs(host, ".bg") ) return "SOCKS 192.168.50.1:1337";
  if (dnsDomainIs(host, ".googlevideo.com") ) return "SOCKS 192.168.50.1:1337";
  if (dnsDomainIs(host, ".youtube.com") ) return "SOCKS 192.168.50.1:1337";
  if (dnsDomainIs(host, ".youtube.ru") ) return "SOCKS 192.168.50.1:1337";
  if (dnsDomainIs(host, ".ytimg.com") ) return "SOCKS 192.168.50.1:1337";
  if (dnsDomainIs(host, ".gvt2.com") ) return "SOCKS 192.168.50.1:1337";
  if (dnsDomainIs(host, "googlevideo.com") ) return "SOCKS 192.168.50.1:1337";
  if (dnsDomainIs(host, "youtube.com") ) return "SOCKS 192.168.50.1:1337";
  if (dnsDomainIs(host, "youtube.ru") ) return "SOCKS 192.168.50.1:1337";
  if (dnsDomainIs(host, "ytimg.com") ) return "SOCKS 192.168.50.1:1337";
  if (dnsDomainIs(host, "gvt2.com") ) return "SOCKS 192.168.50.1:1337";
  if (dnsDomainIs(host, "yt.be") ) return "SOCKS 192.168.50.1:1337";
  if (dnsDomainIs(host, "youtu.be") ) return "SOCKS 192.168.50.1:1337";
  return "DIRECT";
}

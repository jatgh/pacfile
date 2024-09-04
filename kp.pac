function FindProxyForURL(url, host) {
  if (isInNet(host, "192.168.0.0", "255.255.0.0")) return "DIRECT";
  if (isInNet(host, "172.16.0.0", "255.240.0.0")) return "DIRECT";
  if (isInNet(host, "10.0.0.0", "255.0.0.0")) return "DIRECT";
  if (isInNet(host, "100.64.0.0", "255.192.0.0")) return "DIRECT";
  if (isInNet(host, "127.0.0.0", "255.255.255.0")) return "DIRECT";
  if (dnsDomainIs(host, ".yandex.com") ) return "DIRECT";
  if (dnsDomainIs(host, ".yandex.net") ) return "DIRECT";
  if (dnsDomainIs(host, ".yandex.ru") ) return "DIRECT";
  if (dnsDomainIs(host, ".kinopoisk.ru") ) return "DIRECT";
  if (dnsDomainIs(host, "yandex.com") ) return "DIRECT";
  if (dnsDomainIs(host, "yandex.net") ) return "DIRECT";
  if (dnsDomainIs(host, "yandex.ru") ) return "DIRECT";
  if (dnsDomainIs(host, "kinopoisk.ru") ) return "DIRECT";
  if (dnsDomainIs(host, ".yandexadexchange.net") ) return "DIRECT";
  if (dnsDomainIs(host, ".ru") ) return "DIRECT";
  return "SOCKS 127.0.0.1:1337; DIRECT";
}

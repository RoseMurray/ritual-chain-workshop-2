# Configuration Notes

I found myself checking configuration values several times while going
through the workshop.

So I put the basic values into one small config object.

The fields I currently care about are:

- RPC URL
- chain ID
- contract address
- confirmation count

The validation is deliberately simple.

The main purpose is to catch obvious configuration mistakes before I
start debugging something that is actually just a wrong environment
value.

The script also prints the current configuration so I can quickly check
what I am about to use.

TS_CONFIG="tsconfig.lib.json"

rm -rf dist
tsc -p "$TS_CONFIG"
tsc-alias -p "$TS_CONFIG"

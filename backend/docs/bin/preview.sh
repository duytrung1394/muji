#/bin/sh

SCRIPT_DIR=`dirname $0`

aglio -i $SCRIPT_DIR/../api.md --server --port 3001


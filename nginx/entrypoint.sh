#/bin/bash -eu

if [[ -z "${BASIC_USER}" ]]; then
    export DIS_BASIC="#"
	echo "Skip htpasswd generation."
else
    export DIS_BASIC=
	htpasswd -c -b /etc/nginx/.htpasswd $BASIC_USER $BASIC_PASS
    echo "/etc/nginx/.htpasswd is created successfully"
    cat /etc/nginx/.htpasswd
fi

if [ "1" == "$USE_SSL" ]; then
    export EN_SSL=
    export DIS_SSL=#
else
    export EN_SSL=#
    export DIS_SSL=
fi

envsubst '$$HOST $$EN_SSL $$DIS_SSL $$DIS_BASIC' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

nginx -g 'daemon off;'

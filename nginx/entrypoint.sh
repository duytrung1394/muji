#/bin/bash -eu

envsubst '$$HOST $$EN_SSL $$DIS_SSL $$DIS_BASIC' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

if [[ -z "${BASIC_USER}" ]]; then
	echo "Skip htpasswd generation."
else
	htpasswd -c -b /etc/nginx/.htpasswd $BASIC_USER $BASIC_PASS
    echo "/etc/nginx/.htpasswd is created successfully"
    cat /etc/nginx/.htpasswd
fi

nginx -g 'daemon off;'

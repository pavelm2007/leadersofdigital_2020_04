#!/bin/bash
set -e

if [ ! -d "/srv/env/bin" ]; then

    virtualenv /srv/env
    source /srv/env/bin/activate
    pip install -r /srv/app/requirements.txt

else
    echo "source /srv/env/bin/activate"
    source /srv/env/bin/activate
fi

python manage.py migrate

if [ "$1" == 'runserver' ]; then
    # CONTAINER_ALREADY_STARTED="/srv/installed"
    # if [ ! -e $CONTAINER_ALREADY_STARTED ]; then
        # echo "-- First container startup --"

        # echo "pip install --cache-dir=/tmp/pip/ -r ./requirements/docker-dev.txt"
        # pip install --cache-dir=/tmp/pip/ -r ./requirements/docker-dev.txt

        # touch $CONTAINER_ALREADY_STARTED
    # else
        # echo "-- Not first container startup --"
    # fi
    python manage.py $@
else
    if [ "$1" == 'test' ]; then
        python manage.py $@
    else
        exec "$@"
    fi
fi

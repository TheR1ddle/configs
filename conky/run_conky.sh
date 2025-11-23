#!/bin/sh

# --quiet
# echo ${HOME}
conky --quiet --config=${HOME}/.config/conky/conky_0.conf --daemonize
conky --quiet --config=${HOME}/.config/conky/conky_1.conf --daemonize
conky --quiet --config=${HOME}/.config/conky/conky_2.conf --daemonize
conky --quiet --config=${HOME}/.config/conky/conky_4.conf --daemonize
exit 0


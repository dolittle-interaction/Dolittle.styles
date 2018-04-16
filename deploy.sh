#!/bin/bash
docker push dolittle/styles
kubectl patch deployment styles --namespace dolittle -p "{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"date\":\"`date +'%s'`\"}}}}}"
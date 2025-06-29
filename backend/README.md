# Note:

- Run postgres pod before run backend-pod

## Config to use image local

eval $(minikube docker-env)

## Build again image

docker build -t simple-web-app-backend:local ./backend

## Deploy the backend service

kubectl apply -f backend-pod.yml
kubectl apply -f backend-service.yml
kubectl apply -f backend-deployment.yml

## Update the ingress

kubectl apply -f simple-web-app-ingress.yml

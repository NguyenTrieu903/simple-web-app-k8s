# run postgres and pgadmin with kubenetes

kubectl apply -f postgres-secret.yaml
kubectl apply -f postgres-configmap.yml
kubectl apply -f postgres-deploy.yml
kubectl apply -f pgadmin-secret.yml
kubectl apply -f pgadmin-deploy.yml

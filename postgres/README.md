### Run postgres and pgadmin with kubenetes

- kubectl config set-context --current --namespace=kube

- kubectl apply -f postgres-secret.yml

- kubectl apply -f postgres-configmap.yml

- kubectl apply -f postgres-deploy.yml

- kubectl apply -f pgadmin-secret.yml

- kubectl apply -f pgadmin-deploy.yml

- minikube service pgadmin -n kube

### Access ui at: http://192.168.49.2:30200/browser/

- username: `admin@admin.com`
- password: `mypwd`

### After register server with information:

- host: **192.168.49.2**
- port: **30432**
- username: **root**
- password: **admin**

### Refer: https://dev.to/dm8ry/how-to-deploy-postgresql-db-server-and-pgadmin-in-kubernetes-a-how-to-guide-5fm0

#!/bin/sh

docker build -t changliuunsw/react-open-movie-database:${TRAVIS_TAG} .
docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD";
docker push changliuunsw/react-open-movie-database

curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl

mkdir ${HOME}/.kube
cp kubeConfig ${HOME}/.kube/config

cat kube-deploy.yaml | sed "s/{version}/${TRAVIS_TAG}/g" > kube-deploy.yaml
kubectl apply -f kube-deploy.yaml

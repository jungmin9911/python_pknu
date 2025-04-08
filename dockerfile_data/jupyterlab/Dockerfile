# 베이스 이미지
FROM ubuntu:22.04

# 메타데이터 추가
LABEL maintainer="JM jmahn1819@gmail.com"

# 시스템 업데이트
RUN apt update -y && \
       apt install -y sudo passwd openssh-server wget && \
       apt install -y nano net-tools && \
       apt install -y iputils-ping openjdk-8-jdk python3-pip && \
       apt clean && \
       rm -rf /var/lib/apt/lists/*

# 계정 생성 및 세팅
RUN groupadd pkjm && useradd -m -d /home/pkjm -s /bin/bash -g pkjm -G sudo pkjm && \
       echo "pkjm:1234" | chpasswd && \
       mkdir -p /home/pkjm/.ssh && \
       chown -R pkjm:pkjm /home/pkjm && \
       echo "export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64" >> /home/pkjm/.bashrc && \
       echo "export PATH=$PATH:/home/pkjm/.local/bin" >> /home/pkys/.bashrc && \
       chown pkjm:pkjm /home/pkjm/.bashrc && \
       mkdir -p /var/run/sshd && \
       echo "PermitRootLogin no" >> /etc/ssh/sshd_config && \
       echo "PasswordAuthentication yes" >> /etc/ssh/sshd_config

# 사용자 변경
USER pkjm

# 작업환경 변경
WORKDIR /home/pkjm

# pip 업그레이드 및 주피터랩 설치
RUN pip install --upgrade pip && pip install jupyterlab

# ssh 서버 실행 및 주피터랩 가동 (외부접속 가능)
CMD ["/bin/bash", "-c", "service ssh start && python3 -m jupyterlab --ip=0.0.0.0 --port=8888 --allow-root --FileContentsManager.delete_to_trash=False"]
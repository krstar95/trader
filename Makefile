.PHONY: all

all:
	cd loci-api/protobufs && protoc --python_out=../.. markets.proto
	npm install
	./node_modules/protobufjs/bin/pbjs -t static-module -w es6 -o src/protobufs.js loci-api/protobufs/markets.proto
	npm run build

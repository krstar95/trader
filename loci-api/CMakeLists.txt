include(FindProtobuf)
find_package(Protobuf REQUIRED)

PROTOBUF_GENERATE_CPP(PROTO_SRC PROTO_HEADER protobufs/markets.proto)
ADD_LIBRARY(loci-api ${PROTO_HEADER} ${PROTO_SRC})

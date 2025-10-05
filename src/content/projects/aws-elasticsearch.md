---
title: "Amazon Elasticsearch Service"
category: "Cloud Computing"
description: "AWS Elasticsearch Service is a fully managed service making it easier for developers to deploy Elasticsearch cost-effectively at scale"
tags: ["AWS", "Elasticsearch", "Cloud", "Search Engine", "Lucene"]
thumbnail: "/images/elastic.jpg"
githubUrl: "https://github.com/aditya30394/Spotlight-on-AWS-Elasticsearch"
externalUrl: "https://nbviewer.jupyter.org/github/aditya30394/Spotlight-on-AWS-Elasticsearch/blob/master/Elasticsearch.ipynb"
featured: false
order: 3
---

## What is Elasticsearch?

Elasticsearch is a search engine based on the Lucene library which uses BM25 under the hood. Apart from being open-source, it is distributed in nature meaning it can scale quite easily and works with schema-free JSON documents.

## Amazon Elasticsearch Service

AWS Elasticsearch Service is a fully managed service making it easier for developers to deploy Elasticsearch cost-effectively at scale. It provides various security features that you can use to make your APIs secure. The service provides support for open-source Elasticsearch APIs, managed Kibana, integration with Logstash and other AWS services, and built-in alerting and SQL querying.

## Benefits

- **Easy to deploy and manage** - Be ready in minutes!
- **Highly scalable and available** - Up to 3 PB data in a single cluster
- **Highly secure** - Isolation using Amazon VPC and encryption
- **Cost-Effective** - Pay for what you use
- **Perform search in near real-time** - Slight latency (~1sec) to index a document

## Key Concepts

- **Node** - Single instance running Elasticsearch
- **Cluster** - A collection of one or more nodes providing indexing and search capabilities
- **Index** - A collection of different types of documents and their properties
- **Document** - Collection of fields. Basic unit of information that can be indexed

## Comparison with Relational Database

| Elasticsearch | RDBMS |
|--------------|-------|
| Cluster | Collection of Database |
| Shard | Shard |
| Index | Database |
| Type | Table |
| Mapping | Schema |
| Field | Column |
| Document (JSON Object) | Row |
| ID | Primary Key |

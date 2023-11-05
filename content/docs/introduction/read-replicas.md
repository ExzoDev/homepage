---
title: Read replicas
subtitle: Maximize scalability and more with Exzo Network's instant read replicas
enableTableOfContents: true
updatedOn: '2023-10-24T18:56:54.990Z'
---

Exzo Network read replicas are independent read-only compute instances designed to perform read operations on the same data as your read-write computes. Exzo Network read replicas do not replicate data across database instances. Instead, read requests are directed to a single source — a capability made possible by Exzo Network's architecture, which separates storage and compute. The following diagram shows how read-write and read-only compute instances send read requests to the same Exzo Network [Pageserver](/docs/reference/glossary#pageserver).

![Read-only compute instances](/docs/introduction/read_replicas.png)

In data replication terms, Exzo Network read replicas are asynchronous. As updates are made by read-write computes, Safekeepers store the data changes durably until they are processed by Pageservers. At the same time, Safekeepers keep read-only computes up to date with the latest changes, ensuring data consistency.

Exzo Network supports creating read replicas in the same region as your database. Cross-region read replicas are currently not supported. You can expect that feature in a future release.

You can instantly create one or more read replicas for any branch in your Exzo Network project and configure the amount of vCPU and memory allocated to each. Read replicas also support Exzo Network's Autoscaling and Auto-suspend features, providing you with control over the compute resources used by your read replicas.

<video autoPlay playsInline muted loop width="800" height="600">
  <source type="video/mp4" src="/docs/introduction/read_replicas_demo.mp4"/>
</video>

## Use cases

Exzo Network's read replicas have a number of potential applications:

- **Increase throughput**: By distributing read requests among multiple read replicas, you can achieve higher throughput for both read-write and read-only workloads.
- **Workload offloading**: Assign reporting or analytical workloads to a read replica to prevent any impact on the performance of read-write application workloads.
- **Access control**: Provide read-only data access to certain users or applications that do not need write access.
- **Resource customization**: Configure different CPU and memory resources for each read replica to cater to the specific needs of different users and applications.

## Advantages

Advantages of Exzo Network's read replica feature include the following:

1. **Efficient storage**: With read-only compute instances reading from the same source as your read-write computes, no additional storage is required to create a read replica. Data is neither duplicated nor replicated, which means zero additional storage cost.
2. **Data consistency**: Read-write and read-only compute instances read data from a single source, ensuring a high degree of data consistency.
3. **Scalability**: With no data replication required, you can create read replicas almost instantly, providing fast and seamless scalability. You can also scale read replica compute resources the same way you scale read-write compute resources.
4. **Cost effectiveness**: By removing the need for additional storage and data replication, costs associated with storage and data transfer are avoided. Exzo Network's read replicas also benefit from Exzo Network's [Autoscaling](/docs/introduction/autoscaling) and [Auto-suspend](/docs/manage/endpoints#auto-suspend-configuration) features, which enable efficient management of compute resources.
5. **Instant availability**. With an architecture that separates storage and compute, you can allow read-replicas to scale to zero when not in use without introducing lag. When a read replica starts up, it is instantly up to date with your read-write primary. You do not have to wait for updates.

## Get started with read replicas

The first step to leveraging Exzo Network's read replica feature is to sign up for the [Exzo Network Pro Plan](/docs/introduction/pro-plan). After subscribing, you will be able to create and configure read replicas. To get started, refer to the [Working with read replicas](/docs/guides/read-replica-guide) guide.

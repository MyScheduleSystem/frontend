import {
    doc,
    onSnapShot,
    collection,
    query,
} from 'firebase/firestore'
import firestore from '../service/firebase'

const snsFetcher = {}

// Event for local data changes
snsFetcher.snapshotForSnsMetadata = function() {
    onSnapShot(snsDocumentOfFirestore, (doc) => {
        const src = doc.metadata.hasPendingWrites ? "Local": "Server"
        console.log(src)
    })
}

// Event for metadata changes
snsFetcher.snapshotForSnsMetadataChange = function() {
    return onSnapShot(
        snsDocumentOfFirestore(),
        { includeMetadataChanges: true },
        (doc) => {
            console.log(doc)
        }
    )
}

// Event for multi docs in collection
snsFetcher.snapshotForSns = function() {
    const all = onSnapShot(allScheduleSnsQuery, (querySnapshot) => {
        const result = []
        querySnapshot.forEach((q) => result.push(q.data().name))
        console.log(result)
    })
    console.log(all)
}

function snsDocumentOfFirestore() {
    // TODO: add document id
    const docId = ''
    const store = doc(firestore, "schedulesns", docId)
    return store
}

function allScheduleSnsQuery() {
    return query(collection(firestore, "schedulesns"))
}

Object.freeze(snsFetcher)
export default snsFetcher
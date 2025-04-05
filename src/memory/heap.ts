export class Heap {
    private static WORD_SIZE: number = 2 ** 3; // Word size in bytes (8 bytes)
    private static HEAP_SIZE: number = 2 ** 16; // Total heap size in bytes (64 KB)
    private static METADATA_SIZE: number = 1; // Metadata size in words (8 bytes)

    // Metadata offsets (in bytes)
    private tagOffset: number = 0;         // 1 byte for the tag
    private sizeOffset: number = 1;       // 2 bytes for the size

    // Memory management
    private buffer: ArrayBuffer;           // Raw memory buffer
    private heap: DataView;                // DataView for reading/writing memory
    private free: number;                  // Next free address (in words)
    private freeList: number[];            // List of freed addresses (for reuse)

    public constructor() {
        this.buffer = new ArrayBuffer(Heap.HEAP_SIZE);
        this.heap = new DataView(this.buffer);
        this.free = 0;
        this.freeList = [];
    }

    // Helper function to convert word addresses to byte offsets
    private static addressToBytes(address: number): number {
        return address * Heap.WORD_SIZE;
    }
}

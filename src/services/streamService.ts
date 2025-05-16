import type { StreamCallback, StreamCompleteCallback, StreamErrorCallback } from '../types';

const streamMessage = (
  message: string,
  onChunk: StreamCallback,
  onComplete: StreamCompleteCallback,
  onError: StreamErrorCallback,
  baseUrl: string = '/api'
): () => void => {
  let eventSource: EventSource | null = null;
  try {
    const url = `${baseUrl}/stream?msg=${encodeURIComponent(message)}`;
    eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      onChunk(event.data);
    };

    eventSource.onerror = (error) => {
      close();
      console.log(error, 'error');
      onError(new Error('Stream connection error'));
    };

    eventSource.addEventListener('complete', () => {
      console.log('Stream completed');
      close();
      onComplete();
    });

    return close;
  } catch (error) {
    onError(error instanceof Error ? error : new Error('Unknown error occurred'));
    return () => { };
  }

  function close(): void {
    if (eventSource) {
      eventSource.close();
      eventSource = null;
    }
  }
};

export default streamMessage;

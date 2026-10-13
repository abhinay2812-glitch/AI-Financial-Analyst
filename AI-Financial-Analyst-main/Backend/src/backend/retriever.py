def get_retriever(vector_store):
    return vector_store.as_retriever(  #FINANCIAL Reports contain lot of repetative text so  MMR
        search_type="mmr",             #so MMR returns the a diverse range of chunks. 
        search_kwargs={
            "k": 8,
            "fetch_k": 30,
        },
    )

def get_kpi_retriever(vector_store):  #FOR KPI SEARCH SINCE WE ALREADY KNOW WHAT we want 
    return vector_store.as_retriever( #we use similarity search.
        search_type="similarity",
        search_kwargs={
            "k": 20,
        },
    )
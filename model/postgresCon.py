import psycopg2

conn = psycopg2.connect(
    host="localhost",
    port=5432,
    dbname="test",
    user="admin",
    password="admin123")


cur = conn.cursor()

# # Execute a sample query
# cur.execute("SELECT * FROM mytable;")

# # Fetch the results
# results = cur.fetchall()

# # Close the cursor and connection
# cur.close()
# conn.close()
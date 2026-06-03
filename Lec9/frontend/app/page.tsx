"use client"
import { useEffect, useState } from "react";
import axios from "axios"

interface ProductsInterface {
  name: string,
  price: number,
  category: string,
  description: string,
  _id: string
}

interface ProductForm {
  name: string,
  price: string,
  category: string,
  description: string
}

const API_URL = "http://localhost:3001/products"

export default function Home() {
  const [products, setProducts] = useState<ProductsInterface[]>([])
  const [form, setForm] = useState<ProductForm>({
    name: "",
    price: "",
    category: "",
    description: "",
  })
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  async function fetchProducts() {
    try {
      const res = await axios.get(API_URL)
      setProducts(res.data)
    } catch (error) {
      setError("Products ვერ ჩაიტვირთა")
      console.log(error, "fetch products error")
    } finally {
      setLoading(false)
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function clearForm() {
    setForm({
      name: "",
      price: "",
      category: "",
      description: "",
    })
    setEditingId(null)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")

    if (!form.name || !form.price || !form.category || !form.description) {
      setError("ყველა ველი სავალდებულოა")
      return
    }

    const payload = {
      ...form,
      price: Number(form.price),
    }

    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, payload)
      } else {
        await axios.post(API_URL, payload)
      }
      clearForm()
      await fetchProducts()
    } catch (error) {
      setError("ოპერაცია ვერ შესრულდა")
      console.log(error, "save product error")
    }
  }

  function startEdit(product: ProductsInterface) {
    setEditingId(product._id)
    setForm({
      name: product.name,
      price: String(product.price),
      category: product.category,
      description: product.description,
    })
  }

  async function handleDelete(id: string) {
    try {
      setError("")
      await axios.delete(`${API_URL}/${id}`)
      await fetchProducts()
    } catch (error) {
      setError("წაშლა ვერ შესრულდა")
      console.log(error, "delete product error")
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts()
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Products CRUD</h1>

      <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="name"
          className="w-full border rounded p-2"
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="price"
          className="w-full border rounded p-2"
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="category"
          className="w-full border rounded p-2"
        />
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="description"
          className="w-full border rounded p-2"
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="px-3 py-2 rounded bg-blue-600 text-white"
          >
            {editingId ? "Update Product" : "Add Product"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={clearForm}
              className="px-3 py-2 rounded bg-gray-500 text-white"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {loading && <p>იტვირთება...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <section className="space-y-3">
        {products.map((el) => (
          <div
            key={el._id}
            className="flex flex-wrap items-center gap-4 bg-cyan-200 text-black border-2 p-4 rounded-xl sm:text-[red]"
          >
            <div><b>Name:</b> {el.name}</div>
            <div><b>Price:</b> {el.price}</div>
            <div><b>Category:</b> {el.category}</div>
            <div><b>Description:</b> {el.description}</div>
            <button
              onClick={() => startEdit(el)}
              className="px-3 py-1 rounded bg-yellow-500 text-white"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(el._id)}
              className="px-3 py-1 rounded bg-red-600 text-white"
            >
              Delete
            </button>
          </div>
        ))}
        {!loading && products.length === 0 && (
          <p>პროდუქტები არ მოიძებნა</p>
        )}
      </section>
    </main>
  );
}
